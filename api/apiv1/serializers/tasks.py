from store.models import Store, StoreBranch
from tasks.models import StoreTask

from .store import StoreBranchSerializer
from rest_framework import serializers, fields


class StoreTaskSerializer(serializers.ModelSerializer):
	branches = serializers.SerializerMethodField()

    class Meta:
        model = StoreTask
        fields = (
            'id',
            'store_branch',
            'no_workers',
            'capacity',
            'opening_hours',
            'is_active',
            'branches',
        )
    
    def get_branches(self, obj):
        store_qs = StoreBranch.objects.filter(
            store=obj.store_branch,
            is_active=True,
        )

        serializer = StoreBranchSerializer(data=account_qs)
        serializer.is_valid()
        return serializer.data