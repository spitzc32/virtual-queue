from django.urls import path, re_path

from .views import SignUpView, HomeView, ProfileView


urlpatterns = [
	re_path('dashboard/', HomeView.as_view(), name='dashboard'),
    path('signup/', SignUpView.as_view(), name='signup'),
    path('profile/', ProfileView.as_view(), name='profile')
]