#include<iostream>
using namespace std;

double findAverage(int arr[], int size) {
    int sum = 0;
    for (int i = 0; i < size; ++i) {
        sum += arr[i];
    }
    return static_cast<double>(sum) / size;
}

int main() {
    int arr[] = {5, 8, 2, 1, 9, 3};
    int size = sizeof(arr) / sizeof(arr[0]);

    cout << "Average of Elements: " << findAverage(arr, size) << endl;

    return 0;
}
