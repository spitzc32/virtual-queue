from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import re_path

from ..views.accounts import (
	AccountRetrieveAPIView,
	AccountDetailView,
	AccountStoreBranchApiView
	)


account_patterns = [
	re_path(
		r'list/',
		AccountRetrieveAPIView.as_view(),
	),

	re_path(
		'<str:email>/details',
		AccountDetailView.as_view(),
	),
	re_path(
		r'^worker/(?P<pk>\d+)/details',
		AccountStoreBranchApiView.as_view(),
	),
]

account_patterns = format_suffix_patterns(account_patterns)