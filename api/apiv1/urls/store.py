from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import re_path

# TODO: import the made View Classes and fill out the order patterns
# After that, import this in __init__.py for us to connect it in our
# main url (@Joseph)
from ..views.store import (
	StoreRetrieveAPIView,
	StoreDetailView,
	StoreBranchRetrieveAPIView,
	StoreBranchDetailView,
	AccountBranchRetrieveAPIView,
	AccountBranchDetailView
	)

store_patterns = [
	re_path(
		'list/', 
		StoreRetrieveAPIView.as_view(),
	),
	re_path(
		r'^(?P<pk>\d+)/details', 
		StoreDetailView.as_view(),
	),
	re_path(
		'list/', 
		StoreBranchRetrieveAPIView.as_view(),
	),
	re_path(
		r'^(?P<pk>\d+)/details', 
		StoreBranchDetailView.as_view(),
	),
	re_path(
		'list/', 
		AccountBranchRetrieveAPIView.as_view(),
	),
	re_path(
		r'^(?P<pk>\d+)/details', 
		AccountBranchDetailView.as_view(),
	),
]


store_patterns = format_suffix_patterns(store_patterns)
