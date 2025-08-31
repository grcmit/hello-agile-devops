import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'src')))

from app import greet

def test_greet_returns_expected_message():
    assert greet("Team") == "Hello, Team! Welcome to Agile DevOps."
