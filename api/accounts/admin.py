from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Account, AccountBarcode

PERSONAL_INFO_FIELDS = (
    'Personal info', {
        'fields': (
            'first_name',
            'last_name',
            'preferred_name',
            'secondary_email',
            'region',
            'country',
            'longitude',
            'latitude',
        )
    }
)

PERMISSIONS_FIELDS = (
    'Permissions', {
        'fields': (
            'is_active',
            'is_staff',
            'is_superuser',
            'groups',
            'user_permissions',
        )
    }
)

class AccountAdmin(UserAdmin):
    model = Account

    list_display = (
        'email',
        'preferred_name',
        'is_active',
    )

    list_filter = (
        'is_active',
    )

    fieldsets = (
        (None, {
            'fields': (
                'email',
                'password',
            )
        }),
        PERSONAL_INFO_FIELDS,
        PERMISSIONS_FIELDS,
        ('Important dates', {
            'fields': (
                'last_login',
                'date_joined',
            )
        }),
    )

    add_fieldsets = (
        (None, {
            'fields': (
                'email',
                'password1',
                'password2',
            )
        }),
        PERSONAL_INFO_FIELDS,
        PERMISSIONS_FIELDS,
    )

admin.site.register(Account, AccountAdmin)
admin.site.register(AccountBarcode)