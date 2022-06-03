from django.shortcuts import render
from django.http import JsonResponse

enterence = lambda request: JsonResponse({"status": 200, "ok": True})