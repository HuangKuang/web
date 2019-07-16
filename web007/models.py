from django.db import models


# Create your models here.

class Userinfo(models.Model):
    id = models.BigAutoField(primary_key=True)
    username = models.CharField(max_length=256,null=False)
    password = models.CharField(max_length=256,null=False)

    class Meta:
        db_table = "userinfo"

