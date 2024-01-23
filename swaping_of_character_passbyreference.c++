#include<iostream>
using namespace std;

void swapCharacters(char &a, char &b) {
    char temp = a;
    a = b;
    b = temp;
}

int main() {
    string text = "Hello";
    int index1 = 1, index2 = 3;

    cout << "Original String: " << text << endl;

    swapCharacters(text[index1], text[index2]);

    cout << "Modified String: " << text << endl;

    return 0;
}
