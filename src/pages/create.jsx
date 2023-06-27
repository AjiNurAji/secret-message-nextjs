import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { toast } from "react-toastify";
import { createMessage } from "./api/hello";

export default function Create() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInput = (e, getName) => {
    setData({
      ...data,
      [getName]: e.target.value,
    });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (data.from === undefined || data.message === undefined) {
      toast.warning('Mohon isi semua kolom!')
    } else {
      setLoading(true)
      const send = await createMessage(data)
      if(send.data) {
        setLoading(false)
        toast.success('Berhasil mengirim pesan!');
        setTimeout(() => {
          window.location.href = '/'
        }, 5000)
      } else {
        setLoading(false)
        toast.error('Gagal mengirim pesan, siliahkan coba lagi!')
      }git
    }
  }

  return (
    <div className="container">
      <div className={styles.form_wrapper}>
        <div className={styles.logo}>
          <h1 className={styles.title}>
            Secret<span>Message</span>
          </h1>
          <Image src="/icon.svg" width={40} height={40} alt="SecretMessage" />
        </div>
      </div>
      <div className={`${styles.form_wrapper} ${styles.form}`}>
        <div className={styles.form_group}>
          <label htmlFor="from">Dari</label>
          <input
            type="text"
            id="from"
            name="from"
            className={styles.form_control}
            placeholder="Ketik nama samaran anda"
            onChange={(e) => handleInput(e, "from")}
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="message">Pesan</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            className={styles.form_control}
            placeholder="Ketik pesan anda disini"
            onChange={(e) => handleInput(e, "message")}
          ></textarea>
        </div>
        <div className={styles.form_btn}>
          {loading ? (
            <button className={`${styles.btn_send} ${styles.disable_btn}`}>
              Loading...
            </button>
          ) : (
            <button className={styles.btn_send} onClick={handleCreate}>
              Kirim
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
