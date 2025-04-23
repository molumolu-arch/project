from rest_framework_simplejwt.views import TokenRefreshView
from .views import register_user, CustomTokenObtainPairView
from django.urls import path

urlpatterns = [
    path('register/', register_user),
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
