#include<iostream>
#include<unordered_map>
using namespace std;

int majorityElement(int arr[], int size) {
    unordered_map<int, int> frequency;

    for (int i = 0; i < size; ++i) {
        frequency[arr[i]]++;
        if (frequency[arr[i]] > size / 2) {
            return arr[i];
        }
    }

    return -1; // No majority element
}

int main() {
    int arr[] = {3, 3, 4, 2, 4, 4, 2, 4, 4};
    int size = sizeof(arr) / sizeof(arr[0]);

    int result = majorityElement(arr, size);

    if (result != -1) {
        cout << "Majority Element: " << result << endl;
    } else {
        cout << "No Majority Element" << endl;
    }

    return 0;
}
