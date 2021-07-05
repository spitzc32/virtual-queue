from orders.models import Order
from accounts.models import AccountBarcode
from associates.models import (
    BranchOpening,
    AccountStoreBranch,
)

from .accounts import AccountBarcodeSerializer
from .store import (
    WorkerSerializer,
    StoreBranchSerializer,
)

from rest_framework import serializers, fields


class OrderSerializer(serializers.ModelSerializer):
    account_bar = AccountBarcodeSerializer(read_only=True)

    class Meta:
        model = Order
        fields = (
            'id',
            'store_branch',
            'account_bar',
            'queue_hour',
            'queue_no',
            'queue_sub',
            'longitude',
            'latitude',
            'is_active',
        )


class BranchAccSerializer(serializers.ModelSerializer):
    account = WorkerSerializer(read_only=True)
    store_branch = StoreBranchSerializer(read_only=True)
    class Meta:
        model = AccountStoreBranch
        fields = (
            'id',
            'store_branch',
            'account',
        )

class BranchOpeningSerializer(serializers.ModelSerializer):
    workers = BranchAccSerializer(many=True, read_only=True)

    class Meta:
        model = BranchOpening
        fields = (
            'id',
            'created_time',
            'opening_hour',
            'closing_hour',
            'num_of_workers',
            'min_customers',
            'max_customers',
            'store_branch',
            'workers',
        )
