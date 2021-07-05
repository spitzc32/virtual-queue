from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import re_path

from ..views.accounts import (
	AccountRetrieveAPIView,
	AccountDetailView,
	AccountStoreBranchApiView,
	AccountLoginView,
    AccountBarcodeView,
)


account_patterns = [
	re_path(
		r'list/',
		AccountRetrieveAPIView.as_view(),
	),
	re_path(
		r'^(?P<pk>\d+)/details/',
		AccountDetailView.as_view(),
	),
	re_path(
		r'^login/details$',
		AccountLoginView.as_view(),
	),
    re_path(
		r'^barcode/(?P<pk>\d+)/details/',
		AccountBarcodeView.as_view(),
	),
	re_path(
		r'^worker/(?P<pk>\d+)/details',
		AccountStoreBranchApiView.as_view(),
	),
]

account_patterns = format_suffix_patterns(account_patterns)