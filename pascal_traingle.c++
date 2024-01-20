#include<iostream>
using namespace std;


void generatePascalsTriangle(int n) {
    for (int i = 0; i < n; ++i) {
        int coeff = 1;
        for (int j = 0; j <= i; ++j) {
            cout << coeff << " ";
            coeff = coeff * (i - j) / (j + 1);
        }
        cout << endl;
    }
}

int main() {
    int rows;
    cout << "Enter the number of rows for Pascal's Triangle: ";
    cin >> rows;
    generatePascalsTriangle(rows);
    return 0;
}
