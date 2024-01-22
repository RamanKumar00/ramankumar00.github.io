#include<iostream>
using namespace std;


void calculateArea(int &length, int &width, int &area) {
    area = length * width;
}

int main() {
    int length = 5, width = 10, area;

    calculateArea(length, width, area);

    cout << "Area of Rectangle: " << area << endl;

    return 0;
}
