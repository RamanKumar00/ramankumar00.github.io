#include<iostream>
using namespace std;

void reverseArray(int arr[], int size) {
    int start = 0;
    int end = size - 1;

    while (start < end) {
        swap(arr[start], arr[end]);
        start++;
        end--;
    }
}

int main() {
    int arr[] = {5, 8, 2, 1, 9, 3};
    int size = sizeof(arr) / sizeof(arr[0]);

    reverseArray(arr, size);

    cout << "Reversed Array: ";
    for (int i = 0; i < size; ++i) {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}
