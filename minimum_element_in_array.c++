#include<iostream>
using namespace std;

int findMinElement(int arr[], int size) {
    int minElement = arr[0];
    for (int i = 1; i < size; ++i) {
        if (arr[i] < minElement) {
            minElement = arr[i];
        }
    }
    return minElement;
}

int main() {
    int arr[] = {5, 8, 2, 1, 9, 3};
    int size = sizeof(arr) / sizeof(arr[0]);

    cout << "Minimum Element: " << findMinElement(arr, size) << endl;

    return 0;
}
