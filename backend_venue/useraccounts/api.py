# useraccounts/api.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from dj_rest_auth.views import LoginView, LogoutView
from dj_rest_auth.registration.views import RegisterView
from .serializers import (
    CustomLoginSerializer,
    CustomUserDetailsSerializer,
    UserRegisterSerializer,
    VenueRegisterSerializer
)

class VenueRegisterView(RegisterView):
    serializer_class = VenueRegisterSerializer

class UserRegisterView(RegisterView):
    serializer_class = UserRegisterSerializer

class CustomLoginView(LoginView):
    serializer_class = CustomLoginSerializer
    user_serializer_class = CustomUserDetailsSerializer

    def get_response(self):
        response = super().get_response()
        user = self.user
        response.data['user']['user_type'] = user.user_type
        return response