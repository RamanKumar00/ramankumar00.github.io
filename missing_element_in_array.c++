#include<iostream>
using namespace std;

int findMissingNumber(int arr[], int size) {
    int expectedSum = (size + 1) * (size + 2) / 2;
    int actualSum = 0;

    for (int i = 0; i < size; ++i) {
        actualSum += arr[i];
    }

    return expectedSum - actualSum;
}

int main() {
    int arr[] = {1, 2, 4, 6, 3, 7, 8};
    int size = sizeof(arr) / sizeof(arr[0]);

    int result = findMissingNumber(arr, size);

    cout << "Missing Number: " << result << endl;

    return 0;
}
