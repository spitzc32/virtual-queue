from __future__ import unicode_literals
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from django.db import IntegrityError
from django.http import QueryDict

from ..serializers.orders import (
    OrderSerializer,
    BranchOpeningSerializer,
)

from orders.models import Order
from algorithm.weights import Weights
from accounts.models import (
    Account,
    AccountBarcode,
)
from associates.models import (
    BranchOpening,
    AccountStoreBranch,
)

from datetime import datetime

class OrderCreateAPIView(generics.CreateAPIView):
    serializer_class = OrderSerializer

    def create(self, request, **kwargs):
        hour = request.data.get('queue_hour')
        data = {}
        order_qs = Order.objects.filter(
            created_time__gte=datetime.now().date(),
            queue_hour=hour,
        )
        if isinstance(request.data, QueryDict):
            request.data._mutable = True

        request.data['queue_no'] = int(order_qs.count())
        response = super(OrderCreateAPIView, self).create(request, **kwargs)
        order_id = response.data.get('id')
        barcode = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

        try:
            url = barcode + str(order_id)
            acc_bar = AccountBarcode.objects.create(
                account=Account.objects.get(id=int(kwargs.get('pk'))),
                qr_code=url,
            )
            order = Order.objects.get(id=order_id)
            order.account_bar = acc_bar
            order.save()
            Order.objects.filter(id=order_id+1).delete()

            response.data['account_bar'] = acc_bar.id

        except IntegrityError:
            data['message'] = 'Invalid account id'
            return Response(
                data=data,
                status=status.HTTP_400_BAD_REQUEST,
            )

        return Response(
            data=response.data,
            status=status.HTTP_200_OK,
        )

class OrderRetrieveAPIView(generics.ListAPIView):
    serializer_class = OrderSerializer

    def get_queryset(self):
        hour = self.kwargs.get('pk', None)
        account = self.request.query_params.get('account', None)

        weights = Weights(hour)
        weights.calculate()
        weighted_matrix = weights.weights
        order_qs = Order.objects.filter(
            created_time__gte=datetime.now().date(),
            queue_hour=hour,
        )
        order_13 = [order_qs[weight[0]] for weight in weighted_matrix if (weight[0] % 2 ==0)]
        order_14 = [order_qs[weight[0]] for weight in weighted_matrix if (weight[0] % 2 != 0)]
        order_final = order_13 if int(account) == 13 else order_14
        print(order_final, order_13, order_14)

        return order_final


class OrderDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class BranchOpeningCreateAPIView(generics.ListCreateAPIView):
    queryset = BranchOpening.objects.all()
    serializer_class = BranchOpeningSerializer

    def create(self, request, **kwargs):
        response = super(BranchOpeningCreateAPIView, self).create(request, **kwargs)
        branch_id = response.data.get('id')
        data = {}

        try:
            branch_qs = BranchOpening.objects.get(id=branch_id)
            account_qs = AccountStoreBranch.objects.filter(
                store_branch=request.data['store_branch']
            )

            branch_qs.workers.add(*account_qs)

        except IntegrityError:
            data['message'] = 'Invalid account id'
            return Response(
                data=data,
                status=status.HTTP_400_BAD_REQUEST,
            )

        return Response(
            data=response.data,
            status=status.HTTP_200_OK,
        )






