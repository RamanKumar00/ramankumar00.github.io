#include<iostream>
using namespace std;
void swap(int &a,int &b)

{
    int c;
    c=a;
    a=b;
    b=c;
}
int main()
{
    int a,b;
    cout<<"enter the value of a: ";
    cin>>a;

    cout<<"enter the value of b: ";
    cin>>b;

    swap(a,b);
    cout<<a<<endl;
    cout<<b<<endl;


}