#include <iostream> 
using namespace std; 
  
int sum(int arr[], int n) 
{ 
    int sum = 0; 
  
    for (int i = 0; i < n; i++) 
        sum += arr[i]; 
  
    return sum; 
} 
  
int main() 
{ 
    int arr[] = { 1, 23, 54, 12, 9 }; 
    int n = sizeof(arr) / sizeof(arr[0]); 
  
    cout << "Sum: " << sum(arr, n); 
  
    return 0; 
}