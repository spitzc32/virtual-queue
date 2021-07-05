from core.models import BaseModel
from accounts.models import AccountBarcode
from store.models import StoreBranch

from django.db import models


class Order(BaseModel):
    """
    Order model for spcific order of a customer.

    Extends
    -------
        AccountBarcode : class obj
            the QR code of a certain user to be used by in 
            forming a virtual Queue.

    Inherited
    ---------
    BaseModel : class obj
        Model intended for basic specification details

    """
    store_branch = models.ForeignKey(to=StoreBranch, on_delete=models.CASCADE, null=True)
    account_bar = models.ForeignKey(to=AccountBarcode, on_delete=models.CASCADE, null=True)
    queue_hour = models.IntegerField(default=0)
    queue_no = models.IntegerField(default=0)
	
    QUEUE_SUB_CHOICES = (
        ('small', 'small'),
        ('medium','medium'),
        ('large','large'),
    )
    queue_sub = models.CharField(
        max_length=15,
        choices=QUEUE_SUB_CHOICES,
        default='small',
    )

    longitude = models.FloatField()
    latitude = models.FloatField()

    def __str__(self):
        return '{} - {} - {}'.format(self.queue_hour, self.queue_sub, self.queue_no)

