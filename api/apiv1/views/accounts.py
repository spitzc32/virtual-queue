from __future__ import unicode_literals

from rest_framework.response import Response
from rest_framework import status
from django.db import IntegrityError
from rest_framework import generics
from rest_framework.generics import CreateAPIView

from ..serializers.accounts import (
    AccountSerializer,
    AccountRetrieveSerializer,
    AccountBarcodeSerializer,
)

from accounts.models import Account, AccountBarcode
from associates.models import AccountStoreBranch
from store.models import StoreBranch

class AccountRetrieveAPIView(generics.ListCreateAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer


class AccountDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer


class AccountLoginView(generics.ListAPIView):
    serializer_class = AccountRetrieveSerializer

    def get_queryset(self):
        user=self.request.query_params.get('email', None)
        print(user)
        account_qs = Account.objects.filter(
            email=user
        )

        return account_qs


class AccountBarcodeView(generics.RetrieveUpdateDestroyAPIView):
    queryset = AccountBarcode.objects.all()
    serializer_class = AccountBarcodeSerializer


class AccountStoreBranchApiView(CreateAPIView):
    model = Account
    serializer_class = AccountSerializer

    def create(self, request, **kwargs):
        pk = kwargs.get('pk')
        store = StoreBranch.objects.get(id=pk)
        data = {}

        response = super(AccountStoreBranchApiView, self).create(request, **kwargs)
        account_id = response.data.get('id')
        account = Account.objects.get(id=account_id)
        try:
            AccountStoreBranch.objects.create(
                store_branch=store,
                account=account
            )
        except IntegrityError:
            data['message'] = 'Invalid project id'

            return Response(
                data=data,
                status=status.HTTP_400_BAD_REQUEST,
            )

        return Response(
            data=response.data,
            status=status.HTTP_200_OK,
        )





