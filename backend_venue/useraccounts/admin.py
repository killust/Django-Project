# useraccounts/admin.py
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, VenueAccount, RegularUser

class CustomUserAdmin(UserAdmin):
    list_display = ('email', 'name', 'user_type', 'is_staff', 'is_active')
    list_filter = ('user_type', 'is_staff', 'is_active')
    search_fields = ('email', 'name')
    ordering = ('-date_joined',)
    
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal Info', {'fields': ('name', 'avatar')}),
        ('Permissions', {
            'fields': ('user_type', 'is_active', 'is_staff', 'is_superuser', 
                      'groups', 'user_permissions'),
        }),
        ('Important Dates', {'fields': ('last_login', 'date_joined')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'name', 'password1', 'password2'),
        }),
    )

# First register the base User model
admin.site.register(User, CustomUserAdmin)

class VenueAccountAdmin(CustomUserAdmin):
    def get_queryset(self, request):
        return super().get_queryset(request).filter(user_type='venue')

    def save_model(self, request, obj, form, change):
        obj.user_type = 'venue'
        super().save_model(request, obj, form, change)

class RegularUserAdmin(CustomUserAdmin):
    def get_queryset(self, request):
        return super().get_queryset(request).filter(user_type='user')

    def save_model(self, request, obj, form, change):
        obj.user_type = 'user'
        super().save_model(request, obj, form, change)

# Now register the proxy models
admin.site.register(VenueAccount, VenueAccountAdmin)
admin.site.register(RegularUser, RegularUserAdmin)