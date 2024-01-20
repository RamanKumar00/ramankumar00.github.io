#include<iostream>
#include<cmath>
using namespace std;

int main() {
    cout << "Perfect square numbers between 1 and 500 are:" << endl;

    for (int i = 1; i <= 500; ++i) {
        int squareRoot = sqrt(i);
        if (squareRoot * squareRoot == i) {
            cout << i << " ";
        }
    }

    cout << endl;

    return 0;
}
