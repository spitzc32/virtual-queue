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
        )

        serializer = StoreBranchSerializer(
            store_qs,
            read_only=True,
            many=True
        )
        return serializer.data


class StoreBranchSerializer(serializers.ModelSerializer):

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
            'store',
            'longitude',
            'latitude',
        )


class WorkerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Account
        fields = ('__all__')


class AccountBranchSerializer(serializers.ModelSerializer):
    workers = WorkerSerializer(read_only=True, many=True)

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
        )
