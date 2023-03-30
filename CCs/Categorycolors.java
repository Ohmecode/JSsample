import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.io.IOException;

public class Categorycolors extends JFrame implements ActionListener{

  public static void main(String[] args) {
    new Categorycolors();
  }

//actionPerformedメソッド内で参照できるようにフィールドで宣言
    JButton button1;
    JButton button2;
    JButton button3;
    JButton button4;
    JButton button5;
    JButton button6;
    JButton button7;
//Menubarのオブジェクト生成
    JMenuBar menuBar = new JMenuBar();
    JMenu menuFile = new JMenu("FIle");
    JMenuItem menuOpen = new JMenuItem("Copyright Information");
    JMenuItem menuROpen = new JMenuItem("Reset window size to default");
    JMenuItem menuExit = new JMenuItem("Exit");
  Categorycolors(){

//画像の読み込み
    ImageIcon icon1 = new ImageIcon("./CCs/images/320p_menu/pop.jpg");      //ポップ
    ImageIcon icon2 = new ImageIcon("./CCs/images/320p_menu/cool.jpg");     //クール
    ImageIcon icon3 = new ImageIcon("./CCs/images/320p_menu/cute.jpg");     //かわいい
    ImageIcon icon4 = new ImageIcon("./CCs/images/320p_menu/neon.jpg");     //ネオン風
    ImageIcon icon5 = new ImageIcon("./CCs/images/320p_menu/refreshing.jpg");  //上品
    ImageIcon icon6 = new ImageIcon("./CCs/images/320p_menu/pastel.jpg");   //パステル
    ImageIcon icon7 = new ImageIcon("./CCs/images/320p_menu/adult.jpg");    //大人な
    getContentPane().setLayout(new GridLayout(4,2));

    button1 = new JButton(icon1);
      button1.addActionListener(this);
      getContentPane().add(BorderLayout.EAST, button1);
    button2 = new JButton(icon2);
      button2.addActionListener(this);
      getContentPane().add(BorderLayout.WEST, button2);
    button3 = new JButton(icon3);
      button3.addActionListener(this);
      getContentPane().add(BorderLayout.EAST, button3);
    button4 = new JButton(icon4);
      button4.addActionListener(this);
      getContentPane().add(BorderLayout.WEST, button4);
    button5 = new JButton(icon5);
      button5.addActionListener(this);
      getContentPane().add(BorderLayout.EAST, button5);
    button6 = new JButton(icon6);
      button6.addActionListener(this);
      getContentPane().add(BorderLayout.WEST, button6);
    button7 = new JButton(icon7);
      button7.addActionListener(this);
      getContentPane().add(BorderLayout.EAST, button7);

//メニューバーをフレームに追加＆リスナを登録
    menuFile.add(menuOpen);
    menuFile.add(menuROpen);
    menuFile.add(menuExit);
    menuBar.add(menuFile);
    setJMenuBar(menuBar);
    menuOpen.addActionListener(this);
    menuROpen.addActionListener(this);
    menuExit.addActionListener(this);
    setSize(640, 812);
    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    setVisible(true);
  }



  
  public void actionPerformed(ActionEvent ae){
    if (ae.getSource() == button1){
      try {
        Runtime rt = Runtime.getRuntime();
        rt.exec("java \"C:\\Users\\pukk9\\CCs\\categorys\\pop.java\""); //pop
            //C:\Users\Uekita0303\CCs\categorys
      } catch (IOException ex) {
      ex.printStackTrace();
    }
    }else if (ae.getSource() == button2){
      try {
        Runtime rt = Runtime.getRuntime();
        rt.exec("java \"C:\\Users\\pukk9\\CCs\\categorys\\cool.java\""); //cool
    } catch (IOException ex) {
      ex.printStackTrace();
    }
    }else if (ae.getSource() == button3){
      try {
        Runtime rt = Runtime.getRuntime();
        rt.exec("java \"C:\\Users\\pukk9\\CCs\\categorys\\cute.java\""); //cute
    } catch (IOException ex) {
      ex.printStackTrace();
    }
    }else if (ae.getSource() == button4){
      try {
        Runtime rt = Runtime.getRuntime();
        rt.exec("java \"C:\\Users\\pukk9\\CCs\\categorys\\neon.java\""); //neon
    } catch (IOException ex) {
      ex.printStackTrace();
    }
    }else if (ae.getSource() == button5){
      try {
        Runtime rt = Runtime.getRuntime();
        rt.exec("java \"C:\\Users\\pukk9\\CCs\\categorys\\refresh.java\""); //Refresh
    } catch (IOException ex) {
      ex.printStackTrace();
    }
    }else if (ae.getSource() == button6){
      try {
        Runtime rt = Runtime.getRuntime();
        rt.exec("java \"C:\\Users\\pukk9\\CCs\\categorys\\pastel.java\""); //pastel
    } catch (IOException ex) {
      ex.printStackTrace();
    }
    }else if (ae.getSource() == button7){
      try {
        Runtime rt = Runtime.getRuntime();
        rt.exec("java \"C:\\Users\\pukk9\\CCs\\categorys\\adult.java\""); //adult
    } catch (IOException ex) {
      ex.printStackTrace();
    }
    }else if (ae.getSource() == menuOpen){
      JFrame jFrame = new JFrame();
      JOptionPane.showMessageDialog(jFrame,"1.pop Photo by Martin Sanchez on Unsplash\n2.cool Photo by Lucas Benjamin on Unsplash\n3.cute (Photo by Tobias on Unsplash)\n4.neon (Photo by Ikhsan Sugiarto on Unsplash)\n5.elegant(Photo by William Krause on Unsplash)\n6.pastel (Photo by Hal Gatewood on Unsplash)\n7.adult (Photo by Chelsea Francis on Unsplash)");//画像の著作権情報を明記            
    }else if (ae.getSource() == menuROpen){
        setSize(640, 812);
    }else if (ae.getSource() == menuExit){
      System.exit(0);
    }
  }
}



