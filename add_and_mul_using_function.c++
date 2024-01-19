#include<iostream>
using namespace std;
int add(int n1,int n2)
{
    return n1+n2;
   
}
int mul(int n1,int n2)
{
    return n1*n2;
}
int main()
{
    int n1,n2;
    cout<<"enter the value of n1: "<<"n2: ";
    cin>>n1>>n2 ;

    cout<<add(n1,n2);
     cout<<endl;
    cout<<mul(n1,n2);

}