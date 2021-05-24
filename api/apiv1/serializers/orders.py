from orders.models import Order
from accounts.models import AccountBarcode

from .accounts import AccountBarcodeSerializer

from rest_framework import serializers, fields


class OrderSerializer(serializers.ModelSerializer):
    account_info = serializers.SerializerMethodField()

    class Meta:
        model = Order
        fields = (
            'id',
            'account_bar',
            'queue_hour',
            'queue_no',
            'queue_sub',
            'longitude',
            'latitude',
            'is_active',
            'account_info',
        )
    
    def get_account_info(self, obj):
        account_qs = AccountBarcode.objects.filter(
            id=obj.account_bar,
            is_active=True,
        ).first()

        serializer = AccountBarcodeSerializer(data=account_qs)
        serializer.is_valid()
        return serializer.data

