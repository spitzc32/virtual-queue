from store.models import Store, StoreBranch
from accounts.models import Account

from .accounts import AccountSerializer

from rest_framework import serializers, fields


class StoreSerializer(serializers.ModelSerializer):
    branches = serializers.SerializerMethodField()

    class Meta:
        model = Store
        fields = (
            'id',
            'name',
            'description',
            'website_url',
            'default_opening_hours',
            'store_rep',
            'has_branch',
            'is_active',
            'branches',
        )
    
    def get_branches(self, obj):
        store_qs = StoreBranch.objects.filter(
            store=obj.id,
            is_active=True,
        )

        serializer = StoreBranchSerializer(data=store_qs)
        serializer.is_valid()
        return serializer.data


class StoreBranchSerializer(serializers.ModelSerializer):
    store = serializers.SerializerMethodField()

    class Meta:
        model = StoreBranch
        fields = (
            'id',
            'branch',
            'address',
            'city',
            'state_province',
            'country',
            'is_active',
        )



class AccountBranchSerializer(serializers.ModelSerializer):
    st_workers = serializers.SerializerMethodField()

    class Meta:
        model = StoreBranch
        fields = (
            'id',
            'branch',
            'address',
            'city',
            'state_province',
            'country',
            'is_active',
            'workers',
            'st_workers',
        )

    def get_st_workers(self, obj):
        store_qs = Account.objects.filter(
            id=obj.workers.account,
            is_active=True,
        )

        serializer = AccountSerializer(data=store_qs)
        serializer.is_valid()
        return serializer.data