#include<iostream>
using namespace std;

int main() {
    int rows, cols;

   
    cout << "Enter the number of rows: ";
    cin >> rows;

    cout << "Enter the number of columns: ";
    cin >> cols;

   
    for (int i = 0; i < rows; ++i) {
        for (int j = 0; j < cols; ++j) {
            if ((i + j) % 2 == 0) {
                cout << "black\t";
            } else {
                cout << "white\t";
            }
        }
        cout << endl;
    }

    return 0;
}
