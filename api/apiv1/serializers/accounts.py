from accounts.models import Account, AccountBarcode
from associates.models import AccountStoreBranch
from store.models import Store, StoreBranch

from rest_framework import serializers, fields


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = (
            'id',
            'email',
            'profile_picture',
            'username',
            'first_name',
            'last_name',
            'password',
            'preferred_name',
            'secondary_email',
            'longitude',
            'latitude',
            'is_active',
            'is_staff',
            'is_worker',
            'small_estimate',
            'medium_estimate',
            'large_estimate',
       )


class AccountRetrieveSerializer(AccountSerializer):
    store = serializers.SerializerMethodField()

    class Meta:
        model = Account
        fields = (
            'id',
            'email',
            'profile_picture',
            'username',
            'first_name',
            'last_name',
            'password',
            'preferred_name',
            'secondary_email',
            'longitude',
            'latitude',
            'is_active',
            'is_staff',
            'is_worker',
            'store',
       )

    def get_store(self, obj):
        account_qs = AccountStoreBranch.objects.filter(account=obj.id).first()
        if (account_qs):
            store_qs = StoreBranch.objects.filter(id=account_qs.store_branch.id)

            serializer = StoreBranchProfileSerializer(
                data=store_qs,
                many=True
            )
            serializer.is_valid()
            return serializer.data

        return []


class AccountBarcodeSerializer(serializers.ModelSerializer):
    account = AccountSerializer(read_only=True)

    class Meta:
        model = AccountBarcode
        fields = (
            'id',
            'account',
            'qr_code',
        )


class InitStoreSerializer(serializers.ModelSerializer):
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
        )


class StoreBranchProfileSerializer(serializers.ModelSerializer):
    stores = serializers.SerializerMethodField()

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
            'stores',
        )

    def get_stores(self, obj):
        store_qs = Store.objects.filter(id=obj.store.id)

        serializer = InitStoreSerializer(
            data=store_qs,
            many=True
        )
        serializer.is_valid()
        return serializer.data
