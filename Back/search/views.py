from datetime import datetime, timedelta
from django.http import JsonResponse
import requests

def search(request):
    query = request.GET.get("query", "").upper()
    url1 = f'https://api.polygon.io/v1/meta/symbols/{query}/company?apiKey=Ds83GkjPMvcPJfs8TFXj2V4BLkjja8Xn'
    url2 = f'https://www.alphavantage.co/query?function=OVERVIEW&symbol={query}&apikey=0JC33CZ3Q8B7AWO7'
    url3 = f'https://finnhub.io/api/v1/quote?symbol={query}&token=ch53of1r01quc2n53vm0ch53of1r01quc2n53vmg'
    response1 = requests.get(url1).json()
    response2 = requests.get(url2).json()
    response3 = requests.get(url3).json()
    results = {"polygon_data": response1, "alpha_vantage_data": response2, "finnhub_data": response3,}
    return JsonResponse({"results": results})