from django.contrib import admin


class AuditAdminSaveMixin:
    """Mixin for enabling Audit saving functionality

    Must be used for any other type of admin classes to retain Audit saving
    feature:

    i.e. admin.TabularInline, admin.StackedInline, etc.

    Must be the first class to be inherited if your going to use it.

    """
    readonly_fields = [
        'created_time',
        'modified_time',
        'created_by',
        'modified_by',
    ]

    def save_model(self, request, obj, form, change):
        if not change:
            obj.created_by = request.user
            obj.modified_by = request.user
        else:
            obj.modified_by = request.user
        obj.save()
        super().save_model(request, obj, form, change)

    def save_formset(self, request, form, formset, change):
        instances = formset.save(commit=False)
        for obj in formset.deleted_objects:
            obj.delete()
        if not change:
            for instance in instances:
                instance.created_by = request.user
                instance.modified_by = request.user
                instance.save()
        else:
            for instance in instances:
                instance.modified_by = request.user
                instance.save()
        formset.save_m2m()
        super().save_formset(request, form, formset, change)


class AuditModelAdmin(AuditAdminSaveMixin, admin.ModelAdmin):
    """Base ModelAdmin the provides common audit saving features

    All app model admins should inherit from this.

    When overriding the `save_model` or `save_formset` methods of an inheriting
    class, be sure to call `super` after the custom action to retain the core
    functionality applied to it.

    ```
    def save_model(self, request, obj, form, change):
        # some custom actions
        super().save(request, obj, form, change)
    ```

    The `list_filter` and `readonly_fields` should also be retained for
    uniformity.

    """
    list_filter = [
        'created_time',
        'modified_time',
        'is_active',
    ]
