#include<iostream>
using namespace std;
int main()
{
    int num;
    cout<<"enter the number: ";
    cin>>num;
    if( num%2==0 && num%3==0 && num%5==0 )
    {
        cout<<"the given num "<< num<<"is ugly number,";
    }
    else{
        cout<<"the given num "<<  num <<" is not a ugly number";
    }
    return 0;

}