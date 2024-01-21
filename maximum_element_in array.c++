#include<iostream>
using namespace std;

int findMaxElement(int arr[], int size) {
    int maxElement = arr[0];
    for (int i = 1; i < size; ++i) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }
    return maxElement;
}

int main() {
    int arr[] = {5, 8, 2, 1, 9, 3};
    int size = sizeof(arr) / sizeof(arr[0]);

    cout << "Maximum Element: " << findMaxElement(arr, size) << endl;

    return 0;
}
