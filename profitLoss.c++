#include<iostream>
using namespace std;
int main()
{
    int cp,sp,profit,loss;
    cout<<"enter the value of cp: "<<endl;
    cin>>cp;

    cout<<"enter the value of sp: "<<endl;
    cin>>sp;

    if(cp>sp){
        cout<<"you are in loss";
    }

    else if (cp==sp)
    {
        cout<<"no gain no profit";
    }
    else(
        cout<<"you are in profit");
    return 0;


}    
