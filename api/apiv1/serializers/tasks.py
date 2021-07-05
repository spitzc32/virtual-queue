from store.models import Store, StoreBranch
from tasks.models import StoreTask

from .store import StoreBranchSerializer
from rest_framework import serializers, fields


class StoreTaskSerializer(serializers.ModelSerializer):
    store_branch = StoreBranchSerializer(read_only=True)

    class Meta:
        model = StoreTask
        fields = (
            'id',
            'store_branch',
            'no_workers',
            'capacity',
            'opening_hours',
            'is_active',
        )