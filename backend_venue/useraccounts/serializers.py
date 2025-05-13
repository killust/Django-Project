# useraccounts/serializers.py
from rest_framework import serializers  # Correct import
from dj_rest_auth.serializers import LoginSerializer, UserDetailsSerializer
from dj_rest_auth.registration.serializers import RegisterSerializer
from .models import User

class CustomLoginSerializer(LoginSerializer):
    email = serializers.EmailField(required=True)  # Fixed serializer reference
    password = serializers.CharField(style={'input_type': 'password'})

class CustomUserDetailsSerializer(UserDetailsSerializer):
    user_type = serializers.CharField(source='user_type')  # Simplified source

    class Meta(UserDetailsSerializer.Meta):
        model = User
        fields = UserDetailsSerializer.Meta.fields + ('user_type',)
        read_only_fields = ('user_type',)

# useraccounts/serializers.py
class UserRegisterSerializer(RegisterSerializer):
    name = serializers.CharField(required=True)
    user_type = serializers.HiddenField(default='user')

    def get_cleaned_data(self):
        return {
            'password1': self.validated_data.get('password1'),
            'email': self.validated_data.get('email'),
            'name': self.validated_data.get('name'),
            'user_type': 'user'
        }

class VenueRegisterSerializer(RegisterSerializer):
    name = serializers.CharField(required=True)
    user_type = serializers.HiddenField(default='venue')

    def get_cleaned_data(self):
        return {
            'password1': self.validated_data.get('password1'),
            'email': self.validated_data.get('email'),
            'name': self.validated_data.get('name'),
            'user_type': 'venue'
        }