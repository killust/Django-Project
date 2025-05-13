# useraccounts/urls.py
from django.urls import path
from dj_rest_auth.views import LogoutView
from dj_rest_auth.views import UserDetailsView
from rest_framework_simplejwt.views import TokenVerifyView, TokenRefreshView
from .api import (
    CustomLoginView,
    VenueRegisterView,
    UserRegisterView
)
from . import api

urlpatterns = [
    path('register/user/', UserRegisterView.as_view(), name='rest_register_user'),
    path('register/venue/', VenueRegisterView.as_view(), name='rest_register_venue'),
    path('login/', CustomLoginView.as_view(), name='rest_login'),
    path('logout/', LogoutView.as_view(), name='rest_logout'),
    path('user/', UserDetailsView.as_view(), name='rest_user_details'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]