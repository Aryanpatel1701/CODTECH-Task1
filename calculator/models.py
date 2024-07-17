from django.db import models

class CalculationHistory(models.Model):
    operation = models.CharField(max_length=200)
    result = models.CharField(max_length=200)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.operation} = {self.result}"
