from accounts.models import Account, AccountBarcode
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
       )


class AccountBarcodeSerializer(serializers.ModelSerializer):
    account = serializers.SerializerMethodField()

    class Meta:
        model = AccountBarcode
        fields = (
            'id',
            'account',
            'qr_code',
        )

    def get_account(self, obj):
        account_qs = Account.objects.filter(
            id=obj.account,
            is_active=True,
        ).first()

        serializer = AccountSerializer(data=account_qs)
        serializer.is_valid()
        return serializer.data

