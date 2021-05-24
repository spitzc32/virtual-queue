from django.contrib import admin

from core import admin as core_admin
from .models import Order

class OrderAdmin(core_admin.AuditModelAdmin):

    fieldsets = (
        ('Main Information', {
            'fields': (
                'account_bar',
                'queue_hour',
                'queue_sub',
                'queue_no',
                'longitude',
                'latitude',
                'is_active',
            )
        }),
        ('Addition Information', {
            'classes': ('collapse',),
            'fields': (
                'created_time',
                'modified_time',
                'created_by',
                'modified_by',
            )
        })
    )

    list_display = (
        'queue_hour',
        'queue_sub',
        'created_time',
        'modified_time',
        'created_by',
        'is_active'
    )

    list_filter = (
        'queue_hour',
        'queue_sub',
        'is_active',
    )

    search_fields = (
        'account_bar__account__preferred_name',
    )


admin.site.register(Order, OrderAdmin)

