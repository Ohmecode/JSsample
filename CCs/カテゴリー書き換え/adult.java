import javax.swing.*;
import java.awt.*;
import java.awt.event.*;



 public class adult extends JFrame implements ActionListener{
  JPanel p2;
  JLabel label2;
  JLabel label3;
  JLabel label5;
  JTextArea textarea4;
  JTextArea textarea5;
  public static void main(String args[]){
    adult frame = new adult("MyTitle");
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setVisible(true);
  }

  adult(String title){
    
    setTitle("adult");
    setBounds(10, 10, 600, 800);
    SpringLayout layout1 = new SpringLayout();
    GridBagLayout layout = new GridBagLayout();
    JPanel p= new JPanel();
    p.setLayout(layout);

    JPanel p1= new JPanel();

    GridBagConstraints gbc = new GridBagConstraints();

    ImageIcon icon = new ImageIcon("./CCs/images/header/header_adult.jpg");
    JLabel label1 = new JLabel(icon);
    
    label1.setText("��l��");
    label1.setHorizontalTextPosition(JLabel.CENTER);
    label1.setVerticalTextPosition(JLabel.BOTTOM);
    label1.setForeground(Color.BLACK);
    label1.setFont(new Font("�l�r �S�V�b�N", Font.ITALIC,20));
    
    label2 = new JLabel("");
    layout1.putConstraint(SpringLayout.NORTH, label2, 5, SpringLayout.NORTH, p2);
    layout1.putConstraint(SpringLayout.WEST, label2, 5, SpringLayout.WEST, p2);
    label2.setPreferredSize(new Dimension(200, 100));
    label2.setOpaque(true);
    layout.setConstraints(label2, gbc);

    label3 = new JLabel("");
    layout1.putConstraint(SpringLayout.WEST, label3, 5, SpringLayout.WEST, label2);
    label3.setOpaque(true);
    label3.setPreferredSize(new Dimension(200, 100));
    layout.setConstraints(label3, gbc);
    label3.setFont(new Font("�l�r �S�V�b�N", Font.ITALIC,20));
    label3.setHorizontalAlignment(JLabel.CENTER);

    JLabel label4 = new JLabel();
    
    label4.setText("�w�i�F��I��");
    label4.setHorizontalTextPosition(JLabel.CENTER);
    label4.setVerticalTextPosition(JLabel.BOTTOM);
    label4.setForeground(Color.BLACK);
    label4.setFont(new Font("�l�r �S�V�b�N", Font.ITALIC,20));
    
    gbc.gridx = 1;
    gbc.gridy = 1;
    gbc.gridwidth = 1;
    gbc.gridheight = 1;
    layout.setConstraints(label4, gbc);

    label5 = new JLabel("");


    JTextArea textarea1 = new JTextArea("RGB(180,200,198)");
   
    textarea1.setOpaque(false);
    textarea1.setEditable(false);
    textarea1.setFont(new Font("�l�r �S�V�b�N", Font.ITALIC,16));

    gbc.gridx = 0;
    gbc.gridy = 3;
    gbc.gridwidth = 1;
    gbc.gridheight = 1;
    layout.setConstraints(textarea1, gbc);

    JTextArea textarea2 = new JTextArea("RGB(172,50,65)");
   
    textarea2.setOpaque(false);
    textarea2.setEditable(false);
    textarea2.setFont(new Font("�l�r �S�V�b�N", Font.ITALIC,16));

    gbc.gridx = 1;
    gbc.gridy = 3;
    gbc.gridwidth = 1;
    gbc.gridheight = 1;
    layout.setConstraints(textarea2, gbc);
    
    JTextArea textarea3 = new JTextArea("RGB(73,69,68)");
   
    textarea3.setOpaque(false);
    textarea3.setEditable(false);
    textarea3.setFont(new Font("�l�r �S�V�b�N", Font.ITALIC,16));

    gbc.gridx = 2;
    gbc.gridy = 3;
    gbc.gridwidth = 1;
    gbc.gridheight = 1;
    layout.setConstraints(textarea3, gbc);

    textarea4 = new JTextArea("RGB");
   
    textarea4.setOpaque(false);
    textarea4.setEditable(false);
    textarea4.setFont(new Font("�l�r �S�V�b�N", Font.ITALIC,16));

    textarea5 = new JTextArea("RGB");
   
    textarea5.setOpaque(false);
    textarea5.setEditable(false);
    textarea5.setFont(new Font("�l�r �S�V�b�N", Font.ITALIC,16));

    JTextArea textarea6 = new JTextArea("RGB(173,114,47)");
   
    textarea6.setOpaque(false);
    textarea6.setEditable(false);
    textarea6.setFont(new Font("�l�r �S�V�b�N", Font.ITALIC,16));

    gbc.gridx = 0;
    gbc.gridy = 5;
    gbc.gridwidth = 1;
    gbc.gridheight = 1;
    layout.setConstraints(textarea6, gbc);

    JTextArea textarea7 = new JTextArea("RGB(70,46,46)");
   
    textarea7.setOpaque(false);
    textarea7.setEditable(false);
    textarea7.setFont(new Font("�l�r �S�V�b�N", Font.ITALIC,16));

    gbc.gridx = 1;
    gbc.gridy = 5;
    gbc.gridwidth = 1;
    gbc.gridheight = 1;
    layout.setConstraints(textarea7, gbc);
    
    JTextArea textarea8 = new JTextArea("RGB(205,170,42)");
   
    textarea8.setOpaque(false);
    textarea8.setEditable(false);
    textarea8.setFont(new Font("�l�r �S�V�b�N", Font.ITALIC,16));

    gbc.gridx = 2;
    gbc.gridy = 5;
    gbc.gridwidth = 1;
    gbc.gridheight = 1;
    layout.setConstraints(textarea8, gbc);

    JTextArea textarea9 = new JTextArea("RGB(21,12,21)");
   
    textarea9.setOpaque(false);
    textarea9.setEditable(false);
    textarea9.setFont(new Font("�l�r �S�V�b�N", Font.ITALIC,16));

    gbc.gridx = 0;
    gbc.gridy = 7;
    gbc.gridwidth = 1;
    gbc.gridheight = 1;
    layout.setConstraints(textarea9, gbc);

    JTextArea textarea10 = new JTextArea("RGB(145,124,80)");

    textarea10.setOpaque(false);
    textarea10.setEditable(false);
    textarea10.setFont(new Font("�l�r �S�V�b�N", Font.ITALIC,16));

    gbc.gridx = 1;
    gbc.gridy = 7;
    gbc.gridwidth = 1;
    gbc.gridheight = 1;
    layout.setConstraints(textarea10, gbc);



    JButton button1 = new JButton("");
    button1.setPreferredSize(new Dimension(100, 50));
    button1.setBackground(new Color(180,200,198));
    button1.addActionListener(this);
    button1.setActionCommand("Push Button1");
    gbc.gridx = 0;
    gbc.gridy = 2;
    gbc.fill = GridBagConstraints.BOTH;
    layout.setConstraints(button1, gbc);

    JButton button2 = new JButton("");
    button2.addActionListener(this);
    button2.setActionCommand("Push Button2");
    button2.setBackground(new Color(172,50,65));
    button2.setPreferredSize(new Dimension(100, 50));
    gbc.gridx = 1;
    gbc.gridy = 2;
    gbc.fill = GridBagConstraints.BOTH;
    layout.setConstraints(button2, gbc);

    JButton button3 = new JButton("");
    button3.setPreferredSize(new Dimension(100, 50));
    button3.setBackground(new Color(73,69,68));
    button3.addActionListener(this);
    button3.setActionCommand("Push Button3");
    gbc.gridx = 2;
    gbc.gridy = 2;
    gbc.fill = GridBagConstraints.BOTH;
    layout.setConstraints(button3, gbc);
    
    JButton button4 = new JButton("");
    button4.setPreferredSize(new Dimension(100, 50));
    button4.setBackground(new Color(173,114,47));
    button4.addActionListener(this);
    button4.setActionCommand("Push Button4");
    gbc.gridx = 0;
    gbc.gridy = 4;
    gbc.fill = GridBagConstraints.BOTH;
    layout.setConstraints(button4, gbc);

    JButton button5 = new JButton("");
    button5.setPreferredSize(new Dimension(100, 50));
    button5.setBackground(new Color(70,46,46));
    button5.addActionListener(this);
    button5.setActionCommand("Push Button5");
    gbc.gridx = 1;
    gbc.gridy = 4;
    gbc.fill = GridBagConstraints.BOTH;
    layout.setConstraints(button5, gbc);

    JButton button6 = new JButton("");
    button6.setPreferredSize(new Dimension(100, 50));
    button6.setBackground(new Color(207,170,42));
    button6.addActionListener(this);
    button6.setActionCommand("Push Button6");
    gbc.gridx = 2;
    gbc.gridy = 4;
    gbc.fill = GridBagConstraints.BOTH;
    layout.setConstraints(button6, gbc);

    JButton button7 = new JButton("");
    button7.setPreferredSize(new Dimension(100, 50));
    button7.setBackground(new Color(21,12,21));
    button7.addActionListener(this);
    button7.setActionCommand("Push Button7");
    gbc.gridx = 0;
    gbc.gridy = 6;
    gbc.fill = GridBagConstraints.BOTH;
    layout.setConstraints(button7, gbc);

    JButton button8 = new JButton("");
    button8.setPreferredSize(new Dimension(100, 50));
    button8.setBackground(new Color(145,124,80));
    button8.addActionListener(this);
    button8.setActionCommand("Push Button8");
    gbc.gridx = 1;
    gbc.gridy = 6;
    gbc.fill = GridBagConstraints.BOTH;
    layout.setConstraints(button8, gbc);

    

    
    p.add(label4);
    p.add(button1);
    p.add(button2);
    p.add(button3);
    p.add(button4);
    p.add(button5);
    p.add(button6);
    p.add(button7);
    p.add(button8);

    p.add(textarea1);
    p.add(textarea2);
    p.add(textarea3);
    p.add(textarea6);
    p.add(textarea7);
    p.add(textarea8);
    p.add(textarea9);
    p.add(textarea10);
    


    p1.add(label1);

    p2= new JPanel();
    
    Container contentPane = getContentPane();
    contentPane.add(p1,BorderLayout.PAGE_START);
    contentPane.add(p,BorderLayout.CENTER);
    contentPane.add(p2,SpringLayout.SOUTH);
  }
    
  public void actionPerformed(ActionEvent e){
    GridBagLayout layout = new GridBagLayout();
    p2.setLayout(layout);
    GridBagConstraints gbc1 = new GridBagConstraints();
    
    p2.add(label5);
    gbc1.gridx = 0;
    gbc1.gridy = 0;
    label5.setText("�����̗ǂ��F");
    label5.setFont(new Font("�l�r �S�V�b�N", Font.ITALIC,20));
    layout.setConstraints(label5, gbc1);

    String cmd = e.getActionCommand();
      if (cmd.equals("Push Button1"))
    {
      p2.add(textarea4);
      textarea4.setText("RGB(172,50,65)");
      gbc1.gridx = 0;
      gbc1.gridy = 2;
      layout.setConstraints(textarea4, gbc1);
      p2.add(textarea5);
      textarea5.setText("RGB(73,69,68)");
      gbc1.gridx = 1;
      gbc1.gridy = 2;
      layout.setConstraints(textarea5, gbc1);
      p2.add(label2);
      gbc1.gridx = 0;
      gbc1.gridy = 1;
      gbc1.fill = GridBagConstraints.BOTH;
      layout.setConstraints(label2, gbc1);
      p2.add(label3);
      gbc1.gridx = 1;
      gbc1.gridy = 1;
      gbc1.fill = GridBagConstraints.BOTH;
      layout.setConstraints(label3, gbc1);
      label2.setBackground(new Color(172,50,65));
      label3.setBackground(new Color(73,69,68));
    }
    else if (cmd.equals("Push Button2"))
    {
      p2.add(textarea4);
      textarea4.setText("RGB(180,200,198)");
      gbc1.gridx = 0;
      gbc1.gridy = 2;
      layout.setConstraints(textarea4, gbc1);
      p2.add(textarea5);
      textarea5.setText("RGB(null)");
      gbc1.gridx = 1;
      gbc1.gridy = 2;
      layout.setConstraints(textarea5, gbc1);
      p2.add(label2);
      gbc1.gridx = 0;
      gbc1.gridy = 1;
      gbc1.fill = GridBagConstraints.BOTH;
      layout.setConstraints(label2, gbc1);
      p2.add(label3);
      gbc1.gridx = 1;
      gbc1.gridy = 1;
      gbc1.fill = GridBagConstraints.BOTH;
      layout.setConstraints(label3, gbc1);
      label2.setBackground(new Color(180,200,198));
      label3.setBackground(null);
    }
    else if(cmd.equals("Push Button3"))
    {
      p2.add(textarea4);
      textarea4.setText("RGB(180,200,198)");
      gbc1.gridx = 0;
      gbc1.gridy = 2;
      layout.setConstraints(textarea4, gbc1);
      p2.add(textarea5);
      textarea5.setText("RGB(null)");
      gbc1.gridx = 1;
      gbc1.gridy = 2;
      layout.setConstraints(textarea5, gbc1);
      p2.add(label2);
      gbc1.gridx = 0;
      gbc1.gridy = 1;
      gbc1.fill = GridBagConstraints.BOTH;
      layout.setConstraints(label2, gbc1);
      p2.add(label3);
      gbc1.gridx = 1;
      gbc1.gridy = 1;
      gbc1.fill = GridBagConstraints.BOTH;
      layout.setConstraints(label3, gbc1);;
      label2.setBackground(new Color(180,200,198));
      label3.setBackground(null);
    }
    else if(cmd.equals("Push Button4"))
    {
      p2.add(textarea4);
      textarea4.setText("RGB(70,46,46)");
      gbc1.gridx = 0;
      gbc1.gridy = 2;
      layout.setConstraints(textarea4, gbc1);
      p2.add(textarea5);
      textarea5.setText("RGB(null)");
      gbc1.gridx = 1;
      gbc1.gridy = 2;
      layout.setConstraints(textarea5, gbc1);
      p2.add(label2);
      gbc1.gridx = 0;
      gbc1.gridy = 1;
      gbc1.fill = GridBagConstraints.BOTH;
      layout.setConstraints(label2, gbc1);
      p2.add(label3);
      gbc1.gridx = 1;
      gbc1.gridy = 1;
      gbc1.fill = GridBagConstraints.BOTH;
      layout.setConstraints(label3, gbc1);
      label2.setBackground(new Color(70,46,46));
      label3.setBackground(null);
    }
    else if(cmd.equals("Push Button5"))
    {
      p2.add(textarea4);
      textarea4.setText("RGB(207,170,42)");
      gbc1.gridx = 0;
      gbc1.gridy = 2;
      layout.setConstraints(textarea4, gbc1);
      p2.add(textarea5);
      textarea5.setText("RGB(null)");
      gbc1.gridx = 1;
      gbc1.gridy = 2;
      layout.setConstraints(textarea5, gbc1);
      p2.add(label2);
      gbc1.gridx = 0;
      gbc1.gridy = 1;
      gbc1.fill = GridBagConstraints.BOTH;
      layout.setConstraints(label2, gbc1);
      p2.add(label3);
      gbc1.gridx = 1;
      gbc1.gridy = 1;
      gbc1.fill = GridBagConstraints.BOTH;
      layout.setConstraints(label3, gbc1);
      label2.setBackground(new Color(207,170,42));
      label3.setBackground(null);
    }
    else if(cmd.equals("Push Button6"))
    {
      p2.add(textarea4);
      textarea4.setText("RGB(70,46,46)");
      gbc1.gridx = 0;
      gbc1.gridy = 2;
      layout.setConstraints(textarea4, gbc1);
      p2.add(textarea5);
      textarea5.setText("RGB(null)");
      gbc1.gridx = 1;
      gbc1.gridy = 2;
      layout.setConstraints(textarea5, gbc1);
      p2.add(label2);
      gbc1.gridx = 0;
      gbc1.gridy = 1;
      gbc1.fill = GridBagConstraints.BOTH;
      layout.setConstraints(label2, gbc1);
      p2.add(label3);
      gbc1.gridx = 1;
      gbc1.gridy = 1;
      gbc1.fill = GridBagConstraints.BOTH;
      layout.setConstraints(label3, gbc1);
      label2.setBackground(new Color(70,46,46));
      label3.setBackground(null);
    }
    else if(cmd.equals("Push Button7"))
    {
      p2.add(textarea4);
      textarea4.setText("RGB(145,124,80)");
      gbc1.gridx = 0;
      gbc1.gridy = 2;
      layout.setConstraints(textarea4, gbc1);
      p2.add(textarea5);
      textarea5.setText("RGB(null)");
      gbc1.gridx = 1;
      gbc1.gridy = 2;
      layout.setConstraints(textarea5, gbc1);
      p2.add(label2);
      gbc1.gridx = 0;
      gbc1.gridy = 1;
      gbc1.fill = GridBagConstraints.BOTH;
      layout.setConstraints(label2, gbc1);
      p2.add(label3);
      gbc1.gridx = 1;
      gbc1.gridy = 1;
      gbc1.fill = GridBagConstraints.BOTH;
      layout.setConstraints(label3, gbc1);
      label2.setBackground(new Color(145,124,80));
      label3.setBackground(null);
    }
    else if(cmd.equals("Push Button8"))
    {
      p2.add(textarea4);
      textarea4.setText("RGB(21,12,21)");
      gbc1.gridx = 0;
      gbc1.gridy = 2;
      layout.setConstraints(textarea4, gbc1);
      p2.add(textarea5);
      textarea5.setText("RGB(null)");
      gbc1.gridx = 1;
      gbc1.gridy = 2;
      layout.setConstraints(textarea5, gbc1);
      p2.add(label2);
      gbc1.gridx = 0;
      gbc1.gridy = 1;
      gbc1.fill = GridBagConstraints.BOTH;
      layout.setConstraints(label2, gbc1);
      p2.add(label3);
      gbc1.gridx = 1;
      gbc1.gridy = 1;
      gbc1.fill = GridBagConstraints.BOTH;
      layout.setConstraints(label3, gbc1);
      label2.setBackground(new Color(21,12,21));
      label3.setBackground(null);
    }
  }
}


