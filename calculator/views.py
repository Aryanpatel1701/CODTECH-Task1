from django.shortcuts import render
from django.http import JsonResponse
from .models import CalculationHistory
import json

def index(request): 
    return render(request, 'index.html')

def store_history(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        operation = data['operation']
        result = data['result']
        history_item = CalculationHistory.objects.create(operation=operation, result=result)
        return JsonResponse({'status': 'success'})
    return JsonResponse({'status': 'error'})
