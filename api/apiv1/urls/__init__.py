from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import path, include

from .accounts import account_patterns

app_name='api_v1'

urlpatterns = [
	path(
		'account/', 
		include(account_patterns)
	),
]


