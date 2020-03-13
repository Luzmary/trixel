from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoListSerializer
from .models import TodoList


# Create your views here.
class TodoListView(viewsets.ModelViewSet):
    serializer_class = TodoListSerializer
    queryset = TodoList.objects.all()
