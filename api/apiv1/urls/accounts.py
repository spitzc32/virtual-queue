from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import re_path

from ..views.accounts import (
	AccountRetrieveAPIView,
	AccountDetailView
	)


account_patterns = [
	re_path(
		'list/', 
		AccountRetrieveAPIView.as_view(),
	),
	re_path(
		r'^(?P<pk>\d+)/details', 
		AccountDetailView.as_view(),
	),
]

account_patterns = format_suffix_patterns(account_patterns)