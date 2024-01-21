#include<iostream>
using namespace std;

int findSum(int arr[], int size) {
    int sum = 0;
    for (int i = 0; i < size; ++i) {
        sum += arr[i];
    }
    return sum;
}

int main() {
    int arr[] = {5, 8, 2, 1, 9, 3};
    int size = sizeof(arr) / sizeof(arr[0]);

    cout << "Sum of Elements: " << findSum(arr, size) << endl;

    return 0;
}
