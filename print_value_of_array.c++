#include<iostream>
using namespace std;

int main() {
    int size;

    // Ask the user to enter the size of the array
    cout << "Enter the size of the array: ";
    cin >> size;

    int a[size];

    // Ask the user to enter elements for the array
    cout << "Enter " << size << " elements for the array: ";
    for(int i = 0; i < size; i++) {
        cin >> a[i];
    }

    // Display the elements of the array
    cout << "Entered elements of the array: ";
    for (int i = 0; i < size; i++) {
        cout << a[i] << " ";
    }

    return 0;
}

