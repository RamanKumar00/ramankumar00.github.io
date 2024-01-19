#include<iostream>
using namespace std;
int sum(int n1,int n2)
{
   int sum=(n1+n2);
    return sum;
}
int main()
{
    int n1,n2;
    cout<<"enter te value of n1: n2:";
    cin>>n1>>n2 ;

     cout<<"sum of "<<n1<<'+'<<n2<<"is:" ;

    cout<<sum(n1,n2)<<endl;
   

}