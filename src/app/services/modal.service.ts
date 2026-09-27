import { Injectable, signal } from '@angular/core';

export type ModalType = 'free-trial' | 'video' | 'lightbox' | 'trainer' | 'program' | 'enquiry' | 'article' | null;

export interface ModalData {
  videoUrl?: string;
  imageUrl?: string;
  imageCaption?: string;
  trainerData?: any;
  programData?: any;
  articleData?: any;
  locationName?: string;
  membershipPlan?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  activeModal = signal<ModalType>(null);
  modalData = signal<ModalData>({});

  openModal(type: ModalType, data: ModalData = {}) {
    this.modalData.set(data);
    this.activeModal.set(type);
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.activeModal.set(null);
    this.modalData.set({});
    document.body.style.overflow = '';
  }

  openFreeTrial(locationName?: string) {
    this.openModal('free-trial', { locationName });
  }

  openVideo(videoUrl: string) {
    this.openModal('video', { videoUrl });
  }

  openLightbox(imageUrl: string, imageCaption?: string) {
    this.openModal('lightbox', { imageUrl, imageCaption });
  }

  openTrainer(trainerData: any) {
    this.openModal('trainer', { trainerData });
  }

  openProgram(programData: any) {
    this.openModal('program', { programData });
  }

  openEnquiry(membershipPlan?: string) {
    this.openModal('enquiry', { membershipPlan });
  }

  openArticle(articleData: any) {
    this.openModal('article', { articleData });
  }
}
